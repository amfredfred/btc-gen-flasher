import ProductScreenshot from '../../assets/Photos/Broadcaster-screenshots/gold.webp'

export default function ProductSection() {


    return (
        <section className="section-main products">
            <div className="section-inner">
                <div className="text-content" style={{ maxWidth: '100%' }}>
                    <h2>What We Offer</h2>
                    <div className="what-we-offer-container">
                        <img src={ProductScreenshot} alt="" />
                        <div className="what-we-offer-panel-right">
                            <h4>MystiCoin Flash Cipher</h4>
                            <p style={{maxWidth:400}}>
                                <strong style={{color:'red'}}>MystiCoin Flash Cipher</strong> is an innovative program crafted for the purpose of orchestrating simulated bitcoin transactions across blockchain networks.
                                <br /><br />These pseudo-bitcoins are capable of residing within the wallet for a maximum duration of 365 days, after which they face potential rejection by the blockchain, 
                                seamlessly dissolving back into the wallet unless sustained by a substantial hash rate.
                                <br /><br />Notably, the cryptographic magic of the MystiCoin Flash Cipher ensures that,
                                with an adequate hash rate, the simulation can persist indefinitely.
                            </p>
                            <h2>LAST - PRICE: <span style={{color:'red'}}>$500</span></h2>
                            <a href="" className="order-now-button btn">CONTACT US</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}