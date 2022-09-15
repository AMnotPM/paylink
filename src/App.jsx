import React from "react";
import Hero from "./components/Hero";
import imageHero from "./images/profile.jpg";

import GitHub from "./components/social-media/GitHub";
import Instagram from "./components/social-media/Instagram";
import LinkedIn from "./components/social-media/LinkedIn";
import Link from "./components/social-media/Link";
import Twitter from "./components/social-media/Twitter";
import Payment from "./components/payments/Payment";

function App() {
  return (
    <>
      <Hero src={imageHero} alt="" name="Manuel Ernesto" description="Software Developer" />

      <section id="social-media" className="d-flex justify-content-center mb-5">
        <section id="social-media" className="...">
          <Link href="https://danielcastillop.netlify.app" />
          <GitHub href="https://github.com/dlcastillop" />
          <Twitter href="https://twitter.com/dlcastillop" />
          <LinkedIn href="https://linkedin.com/in/dlcastillop" />
          <Instagram href="https://instagram.com/dlcastillop" />
        </section>
      </section>

      <section id="payment-options" className="d-flex flex-column align-items-center">
        <Payment label="Bitcoin" type="bitcoin" img="https://cryptologos.cc/logos/bitcoin-btc-logo.svg" value="bc1qejahgjmqnmyrw7jvn0d7evfdq6ssjl3wq7hfle" />
        <Payment label="Etherium" type="eth" img="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=023" value="bc1qejahgjmqnmyrw7jvn0d7evfdq6ssjl3wq7hfle" />
        <Payment label="UST-TRC20" type="hive" img="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=023" value="bc1qejahgjmqnmyrw7jvn0d7evfdq6ssjl3wq7hfle" />
        <Payment label="Hive" type="hive" img="https://cryptologos.cc/logos/hive-blockchain-hive-logo.svg?v=023" value="bc1qejahgjmqnmyrw7jvn0d7evfdq6ssjl3wq7hfle" />
        <Payment label="Tarjeta CUP" type="bitcoin" img="https://www.svgrepo.com/download/42266/credit-card.svg" value="bc1qejahgjmqnmyrw7jvn0d7evfdq6ssjl3wq7hfle" />
      </section>
    </>
  );
}

export default App;
