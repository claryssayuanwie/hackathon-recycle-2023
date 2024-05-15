<script lang="ts">
    import type { PageData } from './$types';
    import { Loader } from '@googlemaps/js-api-loader';
	import { browser } from '$app/environment';
    import loadingImg from '$lib/assets/loading.gif';
    
    export let data: PageData;

    let infoWindowNode: HTMLDivElement;
    let location: GeolocationCoordinates = {
        accuracy: 14.96,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: 37.9692655,
        longitude: -122.0711031,
        speed: null
    };
    
    let changeTimeout: number;
    let currentSectionsData = data.default.sections;
    let currentMaterial = '';
    let compounds: string[] = [];
    let recycleInput: string;

    $: {
        clearTimeout(changeTimeout);

        let newMaterial = '';
        let newCompounds: string[] = [];
        let newSections = data.default.sections;

        if (recycleInput && recycleInput.length > 0) {
            let inputId = Number(recycleInput);

            data.classifications.forEach((recyclable) => {
                if (recyclable.id === inputId) {
                    newMaterial = recyclable.material;
                    newCompounds = recyclable.compounds;
                    newSections = recyclable.sections;
                    return;
                }
            });
        }

        changeTimeout = setTimeout(() => {
            currentMaterial = newMaterial;
            compounds = newCompounds;
            currentSectionsData = newSections;
        }, 250);
    }

    /*
     * User geolocation for maps
     */
    const geoSuccess: PositionCallback = (position) => {
        location = position.coords;
        console.debug('Geolocation', position);
        loadMap();
    };

    const geoError: PositionErrorCallback = (error) => {
        console.error(error);
        loadMap();  // Still loaded with default location
    };
    
    if (browser) {
        infoWindowNode = document.createElement('div');
        infoWindowNode.classList.add('flex', 'flex-col', 'gap-2', 'text-black');

        const infoName: HTMLParagraphElement = document.createElement('p');
        infoName.classList.add('font-bold');
        infoWindowNode.appendChild(infoName);

        const infoAddress: HTMLParagraphElement = document.createElement('p');
        infoWindowNode.appendChild(infoAddress);

        const infoPhoto: HTMLImageElement = document.createElement('img');
        infoPhoto.classList.add('hidden', 'w-48');
        infoWindowNode.appendChild(infoPhoto);

        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }

    /*
     * Map Widget
     */
     let activeInfoWindow: google.maps.InfoWindow;

    function loadMap() {
        const loader = new Loader({
            apiKey: 'AIzaSyAzKNswJ4sSV-qbP7GRP3hbjH3Dn-V7ZWI',
            version: 'weekly'
        });

        loader.load().then(async () => {
            const currentLoc = new google.maps.LatLng(location.latitude, location.longitude);

            const { Map, InfoWindow } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
            let map = new Map(document.getElementById("map") as HTMLElement, {
                center: currentLoc,
                zoom: 10,
            });

            const placesRequest = {
                location: currentLoc,
                radius: '16100',
                keyword: 'recycling center'
            }

            const placesCallback = (results, status) => {
                console.debug('Places Response:', results, status);
                if (status == google.maps.places.PlacesServiceStatus.OK) {

                    for (let i = 0; i < results.length; i++) {
                        let place = results[i];
                        if (place.business_status && place.business_status != 'OPERATIONAL') continue;

                        const marker = new Marker({
                            title: place.name,
                            position: place.geometry.location,
                            map: map
                        });

                        let infoNode = infoWindowNode.cloneNode(true) as HTMLDivElement;
                        infoNode.getElementsByTagName('p')[0].textContent = place.name;
                        infoNode.getElementsByTagName('p')[1].textContent = place.vicinity;

                        if (place.photos?.length > 0) {
                            infoNode.getElementsByTagName('img')[0].src = place.photos[0].getUrl();
                            infoNode.getElementsByTagName('img')[0].classList.remove('hidden');
                        }

                        const infoWindow = new InfoWindow({
                            content: infoNode.outerHTML
                        });

                        marker.addListener('click', () => {
                            activeInfoWindow?.close();

                            infoWindow.open({
                                anchor: marker,
                                map
                            });
                            activeInfoWindow = infoWindow; 
                        })
                    }
                }
            }

            const { Marker } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary; 
            const { PlacesService } = await google.maps.importLibrary('places') as google.maps.PlacesLibrary;
            let placesService = new PlacesService(map);
            placesService.nearbySearch(placesRequest, placesCallback);
        });
    }

    /*
     * Recycle identify input validation & updating
     */
    function recycleKeypress(event: InputEvent) {
        if (!event.data) return;

        for (let i = 0; i < event.data.length; i++) {
            let charCode = event.data.charCodeAt(i);
            if (!(charCode >= 48 && charCode <= 57)) event.preventDefault();
        }
    }
</script>

<!-- Identifier Tool -->
<div class="bg-white w-full p-14 text-center">
    <h1 class="text-2xl md:text-4xl mb-1">What's your trash made of?</h1>
    <p>Type in the number you see on your trash to discover how you can reduce, reuse, and recycle!</p>
    <div class="mb-20"></div>
    <div class="flex flex-col items-center lg:items-start lg:flex-row gap-10 justify-between px-20">
        <div class="w-96 text-center">
            <div class="mb-2 pb-1 border-b-2 border-b-[#8ec543]/50 p-2 inline-block font-thin text-2xl">
                <h3>Material</h3>
            </div>
            <ul class="text-lg text-black/20">
                <li class:text-black={currentMaterial === 'Plastic'}>Plastic</li> 
                <li class:text-black={currentMaterial === 'Glass'}>Glass</li> 
                <li class:text-black={currentMaterial === 'Paper'}>Paper</li> 
            </ul>
        </div>
        <div class="relative flex-shrink-0">
            <svg class="w-60" viewBox="0 0 412 381" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M158.752 25.2522C134.553 17.5302 124.364 19.6701 121.35 20.7772C105.488 28.2873 97.824 38.2001 94.183 43.2296C91.6056 46.7928 81.1108 60.6284 76.5318 67.4823C64.9972 84.8001 82.6051 94.0134 82.6051 94.0134L127.117 124.073C127.117 124.073 139.987 136.152 151.892 120.339C160.65 108.683 187.733 72.9667 201.373 54.9788C199.001 51.7486 184.728 33.5488 158.753 25.2512L158.752 25.2522Z" fill="#FDBB26"/>
                <path d="M319.139 41.4046L310.283 47.0304C307.971 43.5916 305.354 39.702 302.396 35.3141C284.398 8.51772 268.187 -0.863459 218.783 0.0616515C144.682 1.4513 127.848 15.1253 127.848 15.1253C127.848 15.1253 128.168 14.9234 128.881 14.6609C131.896 13.5574 142.084 11.414 166.283 19.136C192.259 27.4334 206.533 45.6335 208.911 48.8636C209.146 49.1866 209.308 49.4087 209.308 49.4087L238.399 92.7028L224.527 101.512C215.94 106.966 216.461 113.736 225.708 116.552L248.591 123.528C257.824 126.344 272.935 130.96 282.167 133.774L305.06 140.745C322.022 146.438 322.022 146.438 323.758 128.861L326.383 105.685C327.439 96.321 329.162 81.0317 330.229 71.6781L332.829 48.5021C333.889 39.1381 327.722 35.9554 319.135 41.4059L319.139 41.4046Z" fill="#FDBB26"/>
                <path d="M386.127 251.045C405.731 235.927 409.519 226.54 410.246 223.498C412.682 206.543 408.654 194.838 406.467 189.091C404.923 185.023 399.189 168.835 396.009 161.325C387.958 142.358 370.72 151.345 370.72 151.345L321.529 170.272C321.529 170.272 304.499 173.852 311.102 192.274C315.974 205.844 330.782 247.61 338.238 268.647C342.212 268.546 365.082 267.267 386.129 251.046L386.127 251.045Z" fill="#126A3A"/>
                <path d="M285.218 370.87L285.393 360.601C289.501 360.675 294.151 360.745 299.407 360.826C331.426 361.375 348.045 353.605 374.235 313.387C413.525 253.061 411.382 231.88 411.382 231.88C411.382 231.88 411.379 232.25 411.204 232.97C410.47 236.015 406.688 245.4 387.085 260.517C366.035 276.745 343.173 278.016 339.195 278.114C338.798 278.125 338.525 278.128 338.525 278.128L286.786 277.256L287.062 261.173C287.227 251.216 281.336 247.845 273.956 253.7L255.693 268.181C248.321 274.022 236.248 283.578 228.883 289.426L210.616 303.918C196.645 314.355 196.645 314.355 210.259 325.597L228.028 340.69C235.205 346.784 246.938 356.733 254.102 362.827L271.881 377.901C279.045 383.994 285.047 380.818 285.219 370.868L285.218 370.87Z" fill="#126A3A"/>
                <path d="M86.0524 324.201C93.6096 347.777 101.15 354.527 103.764 356.25C118.882 364.302 131.264 364.493 137.408 364.392C141.759 364.318 158.932 364.429 167.075 363.992C187.647 362.865 185.056 343.598 185.056 343.598L183.969 290.9C183.969 290.9 186.391 273.669 166.822 273.615C152.405 273.585 108.087 273.323 85.7762 273.185C84.5178 276.953 77.9434 298.891 86.0524 324.201Z" fill="#8EC543"/>
                <path d="M7.64175 188.578L17.2417 192.229C15.7814 196.068 14.1293 200.419 12.2687 205.331C0.869328 235.257 2.53436 253.531 31.4574 291.83C74.8351 349.276 95.4847 354.461 95.4847 354.461C95.4847 354.461 95.1382 354.33 94.519 353.919C91.9046 352.196 84.3644 345.45 76.8076 321.87C68.6985 296.561 75.2733 274.622 76.5283 270.851C76.6528 270.475 76.747 270.219 76.747 270.219L95.1484 221.857L110.178 227.577C119.482 231.117 124.66 226.723 121.659 217.789L114.246 195.694C111.262 186.774 106.369 172.174 103.378 163.258L95.9592 141.152C90.8885 124.463 90.8885 124.463 75.6903 133.45L55.4584 145.038C47.2922 149.722 33.944 157.366 25.7782 162.036L5.55585 173.638C-2.60364 178.312 -1.66483 185.041 7.642 188.581L7.64175 188.578Z" fill="#8EC543"/>
            </svg>
            
            <input on:beforeinput={recycleKeypress} bind:value={recycleInput} placeholder="#" type="text" maxlength="2" class="placeholder-black/20 border-b-4 border-black absolute top-[32%] left-[32%] font-bold text-5xl w-24 rounded-t-full text-center outline-none">
        </div>
        <div class="w-96 text-center">
            <div class="mb-2 pb-1 border-b-2 border-b-[#8ec543]/50 p-2 inline-block font-thin text-2xl">
                <h3>Category</h3>
            </div>
            <ul class="text-lg text-black">
                {#each compounds as compound}
                    <li>{compound}</li>
                {/each}
            </ul>
        </div>
    </div>    
</div>
<!-- Information Section -->
<div class="flex flex-col shadow-inner p-10">
    {#each currentSectionsData as section, i}
        <div class="flex items-center justify-center flex-col lg:odd:flex-row lg:even:flex-row-reverse gap-10 lg:gap-20 p-10 w-full">
            <img alt="Recycle Info" class="max-w-full max-h-96 sm:max-w-[60%] lg:max-w-[50%] rounded-md" src={section.image}>
            <div>
                {#each section.paragraphs as paragraph}
                    <p class="max-w-xl text-lg">{paragraph}</p>
                    <br>
                {/each}
            </div>
        </div>
    {/each}
</div>
<!-- Map Section -->
<div class="flex flex-col-reverse lg:flex-row p-10 gap-10 bg-white shadow-inner">
    <div id="map" class="w-full h-96 lg:w-1/2 rounded-md flex-shrink-0">
        <div class="w-full h-full flex items-center justify-center">
            <img alt="Loading" src={loadingImg} class="w-24">
        </div>
    </div>
    <div class="lg:max-w-xl">
        <h1 class="text-2xl md:text-4xl mb-2">Don't throw your trash away!</h1>
        <h2 class="text-lg md:text-2xl mb-2">Go to a <span class="text-[#126a3a] font-bold">recycling</span> center near you.</h2>
        <p>Even if your trash can't be recycled in your bin at home, many specialized recycling centers will even take old
            electronics and batteries to be reused or safely disposed of.
        </p>
    </div>
</div>