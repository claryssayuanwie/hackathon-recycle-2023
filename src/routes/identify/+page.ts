import type { PageLoad } from './$types';

// Default
import defaultFirstImg from '$lib/assets/identify/default-first.png';
import defaultSecondImg from '$lib/assets/identify/default-second.png';

// Plastic
import oneImg from '$lib/assets/identify/one.png';
import twoImg from '$lib/assets/identify/two.png';
import threeImg from '$lib/assets/identify/three.png';
import fourImg from '$lib/assets/identify/four.png';
import fiveImg from '$lib/assets/identify/five.png';
import sixImg from '$lib/assets/identify/six.png';
import sevenImg from '$lib/assets/identify/seven.png';

// Glass
import seventyImg from '$lib/assets/identify/seventy.png';
import seventyOneImg from '$lib/assets/identify/seventy-one.png';
import seventyTwoImg from '$lib/assets/identify/seventy-two.png';

// Paper
import twentyImg from '$lib/assets/identify/twenty.png';
import twentyOneImg from '$lib/assets/identify/twenty-one.png';
import twentyTwoImg from '$lib/assets/identify/twenty-two.png';

export const load = (async () => {
    return { 
        title: 'Identify',
        default: {
            sections: [
                {
                    image: defaultFirstImg,
                    paragraphs: [`Single use plastic bottles are designed for exactly that, single use. It's not safe to reuse single use plastic bottles for drinking. While most plastic bottles are recyclable, there are also lots of great ways you can reuse them for things other than drinking. There are many fun tutorials out there for everyone to try to make at home!`]
                },
                {
                    image: defaultSecondImg,
                    paragraphs: [`Did you know Americans throw away over 11 million tons of glass bottles and jars each year, even though they’re 100% recyclable? Glass has an unlimited life and can be melted and reused endlessly. Instead of just sending your empty bottles and jars off to be recycled, try repurposing them in the comfort of your own home. Keep reading to learn how to reuse glass bottles and jars of all shapes and sizes in resourceful, fun ways.`]
                }
            ]
        },
        classifications: [
            // Plastic
            {
                id: 1,
                material: 'Plastic',
                compounds: ['Polyethylene terephthalate (PET or PETE)'],
                sections: [
                    {
                        image: oneImg,
                        paragraphs: [
                            `This plastic is called polyethylene terephthalate (PET or PETE). It is very common. Most likely you have a plastic drink bottle. It is easy to recycle at your local waste collection facility or on your curbside collection.`,
                            `To re-use this at home, you can turn it into a potted plant, create any type of container, or make creative jewelry. You can even melt this plastic at no more than 250 celsius and pour it into a mold where it will harden again. There are purchasable plastic molding kits. Or, silicone products such as “Liquid Nails” can be used to create your own molds. Clay can also be easily used to create molds. If you have a plastic lid, you can re use it on various containers, or use it to scrape the ice off your car’s windshield on cold mornings. `,
                        ]
                    }
                ]
            },
            {
                id: 2,
                material: 'Plastic',
                compounds: ['High-density polyethylene (HDPE)'],
                sections: [
                    {
                        image: twoImg,
                        paragraphs: [
                            `This plastic is called high-density polyethylene (HDPE). It is a non-transparent plastic. Most likely you have a milk or shampoo container, household cleaner bottle, or a shopping or freezer bag.`,
                            `Reuse your grocery bags and bottles as much as possible. A milk jug can be filled with water and used as a 7lb dumbbell. Bottles can be turned into flower pots. At the end of the day hard plastics can be put into your recycling bin; but soft plastic such as bags or anything that you can permanently deform by hand need to be dropped off at specialist recycling.`,
                        ]
                    }
                ]
            },
            {
                id: 3,
                material: 'Plastic',
                compounds: ['Polyvinyl chloride (PVC)'],
                sections: [
                    {
                        image: threeImg,
                        paragraphs: [
                            `Polyvinyl chloride (PVC) includes hazardous additives; such as chlorine. It is nicknamed poison plastic, yet it is found in children’s toys and shampoo or detergent bottles. Do not purchase PVC products if you can because it is very difficult to recycle.`,
                            `Chemical and mechanical processes are required to re-mold PVC. Therefore PVC usually ends up being disposed of in a landfill. Keep using your PVC products as long as possible.`,
                            `There are many ways to reuse PVC at home. You can create a fishing pole rack or a rack for other sporting goods. A PVC pipe can be drilled into the wall of a tool shed and used as storage for skinny things, or to hold vacuum attachments and a large variety of other tools.`,            
                        ]
                    }
                ]
            },
            {
                id: 4,
                material: 'Plastic',
                compounds: ['Low-density polyethylene (LDPE)'],
                sections: [
                    {
                        image: fourImg,
                        paragraphs: [
                            `Low-density polyethylene (LDPE) is a soft and flexible plastic. Most likely you have a squeeze bottle of condiments, or grocery or freezer bag or shrink wrap. It is acid resistant and safe for food storage.`,
                            `Rigid LDPE plastics are easily recyclable. However, double check to make sure it is accepted in your location. It is unlikely that any soft or flexible LDPE plastics will be accepted.`,
                            `If you have a plastic lid, you can re use it on any food container. You can also use it as a sink drain stopper. Large lids can also be used as food or water bowls for pets, or under indoor plants to catch water and soil.`,
                        ]
                    }
                ]
            },
            {
                id: 5,
                material: 'Plastic',
                compounds: ['Polypropylene'],
                sections: [
                    {
                        image: fiveImg,
                        paragraphs: [
                            `This plastic is called polypropylene. It has a high melting point and is also food safe. You likely have a microwave safe food container or a straw. Place these items into your dishwasher and reuse them when you’re done!`,
                            `If you have a broken or unusable polypropylene material, check if polypropylene is curbside recyclable in your area. Otherwise you will need to find a specialist recycling or mail in program.`,
                        ]
                    }
                ]
            },
            {
                id: 6,
                material: 'Plastic',
                compounds: ['Polystyrene'],
                sections: [
                    {
                        image: sixImg,
                        paragraphs: [
                            `Polystyrene is also called styrofoam. It’s often made into packing peanuts and used to ship fragile items. Or you may have a foamy container such as take out coffee, since the airy material is a good insulator.`,
                            `The bulky, light material can easily fly away and become litter, thus usually isn’t accepted in curbside recycling programs. It is usually compressed into a small size and transported to a centralized plant.`,
                            `Sometimes a polystyrene-eating bacteria is used to dispose of the material, though it’s inefficient. It can also be burned and used as energy in a process called thermal recycling.`,
                        ]
                    }
                ]
            },
            {
                id: 7,
                material: 'Plastic',
                compounds: ['Bisphenol A (BPA)'],
                sections: [
                    {
                        image: sevenImg,
                        paragraphs: [
                            `You most likely have a biodegradable plastic cup or plasticware. These are not to be put in the recycling bin. They are vegetable based and you can dispose of them with your compostable food waste.`,
                            `However, these items aren’t heat safe. If your number 7 plastic has the word PLA or compostable near the 7 symbol, it is also recyclable.`,
                        ]
                    }
                ]
            },
            // Glass
            {
                id: 70,
                material: 'Glass',
                compounds: ['Mixed Glass'],
                sections: [
                    {
                        image: seventyImg,
                        paragraphs: [
                            
                        ]
                    }
                ]
            },
            {
                id: 71,
                material: 'Glass',
                compounds: ['Clear Glass'],
                sections: [
                    {
                        image: seventyOneImg,
                        paragraphs: [
                            
                        ]
                    }
                ]
            },
            {
                id: 72,
                material: 'Glass',
                compounds: ['Green Glass'],
                sections: [
                    {
                        image: seventyTwoImg,
                        paragraphs: [
                            
                        ]
                    }
                ]
            },
            // Paper
            {
                id: 20,
                material: 'Paper',
                compounds: ['Cardboard'],
                sections: [
                    {
                        image: twentyImg,
                        paragraphs: [
                            
                        ]
                    }
                ]
            },
            {
                id: 21,
                material: 'Paper',
                compounds: ['Plain Paper'],
                sections: [
                    {
                        image: twentyOneImg,
                        paragraphs: [
                            
                        ]
                    }
                ]
            },
            {
                id: 22,
                material: 'Paper',
                compounds: ['Mixed Paper'],
                sections: [
                    {
                        image: twentyTwoImg,
                        paragraphs: [
                            
                        ]
                    }
                ]
            },
        ]
    };
}) satisfies PageLoad;