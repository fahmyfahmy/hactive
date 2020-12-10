import React from 'react';
import './css/Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/b2abb07e-1621-44d7-8ab8-2d8d3d8bec16.jpg?im_w=720"
                title="Seluruh rumah. Tuan rumah: Maroon tuktuk"
                description="7 tamu · 2 kamar tidur · 4 tempat tidur · 1 kamar mandi"
                price="$327/ malam"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/23411479-7713-408a-9a4a-b649f643e738.jpg?im_w=720"
                title="Seluruh rumah. Tuan rumah: Nadhira"
                description="5 tamu · 1 kamar tidur · 1 tempat tidur · 1 kamar mandi + ruang toilet"
                price="$156/ malam"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/28390faf-7e3d-4bda-b4c8-371045cfe9dc.jpg?im_w=720"
                title="Kamar pribadi di bed and breakfast. Tuan rumah: Amelia"
                description="13 tamu · 4 kamar tidur · 12 tempat tidur · 0 kamar mandi bersama"
                price="$464/ malam"
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/20d54775-5270-4c3e-91e8-0e9bb126a313.jpg?im_w=720"
                title="Seluruh vila. Tuan rumah: M"
                description="15 tamu · 4 kamar tidur · 4 tempat tidur · 5 kamar mandi"
                price="$248/ malam"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/09430b69-2572-4da9-a8c6-86b51f07d6ee.jpg?im_w=720"
                title="Seluruh vila. Tuan rumah: Imapaka"
                description="9 tamu · 3 kamar tidur · 6 tempat tidur · 3 kamar mandi + ruang toilet"
                price="$494/ malam"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/b9771a84-1f24-411d-b6c8-7c5e95ca8dfb.jpg?im_w=720"
                title="Seluruh vila. Tuan rumah: Michael"
                description="6 tamu · 2 kamar tidur · 3 tempat tidur · 3 kamar mandi"
                price="$335/ malam"
            />
            </div>
        </div>
    )
}

export default Home
