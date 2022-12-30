import { ImageResponse } from "@vercel/og";
import { NextRequest } from 'next/server';

export const config = {
    runtime: 'edge'
};

export default async function (NextRequest) {
    try {
        const request = NextRequest;
        const { searchParams } = new URL(request.url);
        const title = searchParams.hasTitle ? searchParams.get('title')?.slice(0, 100) : 'Vaidehi Beauty Care';
        const description = searchParams.hasDescription ? searchParams.get('description') : 'Vaidehi Beauty Care & Spa has been offering beauty services to the lovely ladies in Ahmedabad since 1991. We provide Laser Treatment, Hair Removal Services, Facial, Bridal and many more';
        return new ImageResponse(
            (
                <div tw="w-full h-full flex flex-col items-center justify-content-center bg-whtie p-18">
                    <img src='https://www.vaidehibeautycare.com/vbc-logo.svg' tw="w-[400px]" />
                    <h2 tw="text-5xl font-bold">{title}</h2>
                    <p tw="text-2xl text-center">{description}</p>
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