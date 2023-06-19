import { ImageResponse } from "@vercel/og";
import { NextRequest } from 'next/server';

export const runtime = 'edge'

export default async function (NextRequest) {
    try {
        const request = NextRequest;
        const { searchParams } = new URL(request.url);
        const hasTitle = searchParams.has('title');
        const title = hasTitle ? searchParams.get('title') : 'Vaidehi Beauty Care';
        const hasDescription = searchParams.has('description');
        const description = hasDescription ? searchParams.get('description') : 'Vaidehi Beauty Care & Spa has been offering beauty services to the lovely ladies in Ahmedabad since 1991. We provide Laser Treatment, Hair Removal Services, Facial, Bridal and many more';
        return new ImageResponse(
            (
                <div
                    tw="w-full h-full flex flex-col justify-center bg-pink-800 text-white p-18"
                >
                    <img src='https://www.vaidehibeautycare.com/vbc-logo.svg' tw="w-[200px]" />
                    <h2 tw="text-5xl font-bold">{title}</h2>
                    <p tw="text-2xl">{description}</p>
                    <a tw="flex flex-col bg-white text-pink-800 flex items-center px-4 py-2 w-72 text-lg rounded-md font-medium">
                        Book Appointment
                        <span tw="block pb-2">
                            +91 98254 11321
                        </span>
                    </a>
                </div >
            ),
            {
                width: 1200,
                height: 630,
            },
        );
    } catch (error) {
        console.error(error);
        return new Response('Failed to generate the OG image', { status: 500 });
    }
}