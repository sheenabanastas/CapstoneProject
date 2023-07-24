import '../assets/css/Faqs.css';
import '../assets/css/Footer.css'
import Footer from '../components/Footer';

export default function Faqs() {
        return (
            <div className="faqs-page">
            <div className="faqs-page-container">
                <h1> Frequently Asked Questions</h1>
                <div className="faq-grid-container"> 
                    <div className='faq-item'>
                        <div class="faqs-question-and-answer">
                            <p className="faqs-questions">
                                Can you make outfits other than Filipiniana, or can you also make casual wear?
                            </p>
                            <p className="faqs-answers">
                                Absolutely! We specialize in creating custom clothing, and we encourage you to personalize your garments.
                            </p>
                        </div>
                    </div>
                    <div className='faq-item'>
                        <div class="faqs-question-and-answer">
                            <p className="faqs-questions">
                                What if there are discrepancies on the order shipped?
                            </p>
                            <p className="faqs-answers">
                                We are customer-centric so returns for issues with fit are acceptable and we will absorb the shipping fee should there be a need to send it back.
                            </p>
                        </div>
                    </div>
                    <div className='faq-item'>
                        <div class="faqs-question-and-answer">
                            <p className="faqs-questions">
                                Do you have shop in Lazada or Shoppe?
                            </p>
                            <p className="faqs-answers">
                                We ship via usual channels but we are not on Lazada or Shopee.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}