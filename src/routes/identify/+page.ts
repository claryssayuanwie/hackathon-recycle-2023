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
                            `If you have a lot of scraps of glass of various colors, it is not easy for recycling workers to handle because broken glass is dangerous`,
                            `You can create your own recycled glass mosaic. It is not as daunting of a task as it may seem, in fact it’s quite easy to make a beautiful artwork with mixed glass.`,
                            `Glass shards may be sharp, so you may want to tumble your glass or collect shards off of beaches where they have been naturally tumbled to smooth out the edges.`,
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
                            `All glass is recycled in the same way. You will be asked to separate glass by color if you are selling it at a recycling facility. It is 100% recyclable because it doesn’t lose its original quality.`,
                            `Here are some exceptions: Glass that has been treated with chemicals. Pyrex and ceramics have been treated with chemicals so that they can withstand high heat, thus they can’t be recycled. Drinking glasses also cannot be recycled because of chemical treatments used to raise the melting point. If your glass is frosted it is likely that it has been treated with chemicals and is no longer recyclable.`,
                            `Broken glass is too dangerous to handle, so put it in a labeled cardboard box before recycling to improve the safety conditions at the recycling facility.`,
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
                            `If you have an intact glass bottle, you can keep using it forever or even recycle it for money if it has not been chemically treated.`,
                            `If you want to add some aesthetic for your garden, A wine bottle can be made into a potted plant if you remove the bottom of the bottle, tip it upside down and fasten it to a fence to fill with soil and your choice of plants.`,
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
                            `Cardboard is curbside recyclable. However you can reduce your waste by reusing cardboard boxes for storage, or creating 3D models, artwork, or paintings.`,
                            `Whether they’re from a shipment or you’ve just moved and have all of those moving boxes left, cardboard boxes can pile up quickly and the only way to get rid of them is to break them down and take them to the recycling center, right?`,
                            `Really, carboard boxes can easily be used as storage totes or saved for moving time.`
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
                            `Paper is made of 33% recycled paper, 33% trees and plants, and 33% wood scraps. It is 100% recyclable.`,
                            `All paper is recycled the same way, just make sure it is free of contamination such as grease, food waste, paint or glue. Tissue paper and shredded paper are not recyclable.`,
                            `If you have sensitive information on your paper, shred it and deliver it to a shredded paper company.`,
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
                            `Magazines, newspapers, cardstock, origami paper, book pages, watercolor paper, construction paper, scrapbook paper, and printer paper are all recyclable! That is because paper is made of 33% recycled paper, 33% trees and plants, and 33% wood scraps.`,
                            `All paper is recycled the same way, just make sure it is free of contamination such as grease, food waste, paint or glue.`,
                            `Tissue paper and shredded paper are not recyclable, but there are eco-friendly ways to dispose of them.`,
                        ]
                    }
                ]
            },
        ]
    };
}) satisfies PageLoad;