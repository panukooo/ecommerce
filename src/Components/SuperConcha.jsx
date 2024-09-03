import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';


const SuperConcha = () => {
    let [conchas, setConchas] = useState(0);
    let cartItems = useSelector(state => state.cart.cartItems);
    let total = cartItems.reduce((acumulator, product) => {return acumulator + product.price * product.quantity}, 0)
    const styleConchas = {
        alignment: {
            textAlign: "center",
        },
    }

    useEffect(() => {
        if(total >= 5000 && total <= 9999) {
            setConchas(200);
        }
        else if(total >= 10000 && total <= 19999) {
            setConchas(400);
        }
        else if(total >= 20000 && total <= 39999) {
            setConchas(8000);
        }
        else if(total > 40000){
            setConchas(16000);
        }
        else {
            setConchas(0);
        }
    }, [total]);

    return(
        <section style={styleConchas.alignment}>
            <h2>Super Conchas</h2>
            <p>You will earn {conchas} super conchas with this purchase</p>
        </section>
    );
}

export default SuperConcha;