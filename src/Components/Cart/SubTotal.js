import React from 'react';
import { useSelector } from 'react-redux';

const SubTotal = () => {
    const cartItems = useSelector((state) => state.AppReducer.cart);
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    const shipping = 0;
    const total = subtotal + shipping;

    return (

        <section className="mx-auto w-full px-4 md:max-w-[400px]">
            <div className="">
                <div className="border py-5 px-4 shadow-md">
                    <p className="font-bold">ORDER SUMMARY</p>

                    <div className="flex justify-between border-b py-5">
                        <p>Subtotal</p>
                        <p>${subtotal.toFixed(2)}</p>
                    </div>

                    <div className="flex justify-between border-b py-5">
                        <p>Shipping</p>
                        <p>${shipping.toFixed(2)}</p>
                    </div>

                    <div className="flex justify-between py-5">
                        <p>Total</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default SubTotal;
