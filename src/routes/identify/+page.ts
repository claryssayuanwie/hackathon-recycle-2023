import type { PageLoad } from './$types';
import defaultFirstImg from '$lib/assets/identify/default-first.png';
import defaultSecondImg from '$lib/assets/identify/default-second.png';

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
        classifications: [{
            id: 1,
            material: 'Plastic',
            compounds: ['Polyethylene terephthalate (PET or PETE)']
        }]
    };
}) satisfies PageLoad;