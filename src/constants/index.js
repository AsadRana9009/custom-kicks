import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "CK Air 01",
        price: "PKR 2999",
    },
    {
        imgURL: shoe5,
        name: "CK Air 10",
        price: "PKR 3999",
    },
    {
        imgURL: shoe6,
        name: "CK Air 100",
        price: "PKR 4999",
    },
    {
        imgURL: shoe7,
        name: "CK Air 001",
        price: "PKR 2999",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Fast & Free Delivery",
        subtext: "Get your custom-designed shoes delivered to your doorstep swiftly and at no cost."
    },
    {
        imgURL: shieldTick,
        label: "AI-Powered Customization",
        subtext: "Design with confidence using our secure and innovative AI modeling tools."
    },
    {
        imgURL: support,
        label: "Expert Assistance",
        subtext: "Our team is always available to guide you in crafting your perfect pair of shoes."
    },
];


export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Ahmed Kareem',
        rating: 4.8,
        feedback: "The AI customization tool made designing my perfect pair of shoes so easy! The quality is outstanding. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Aisha Siddiqah',
        rating: 5.0,
        feedback: "From design to delivery, the entire experience was seamless. The shoes are comfortable, stylish, and uniquely mine!"
    }
];



export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "CK 1", link: "/" },
            { name: "CK 2", link: "/" },
            { name: "CK 3", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@ck.com", link: "mailto:customer@ck.com" },
            { name: "+92000000000", link: "tel:+9200000000" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
