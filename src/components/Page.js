import React, { useState } from 'react'

export default function Page() {
    return (
        <section>
            <div className="page-container">
                <h1>3 Adımda Mükemmel Bir CV Oluştur</h1>
                <div className="page-card">                    
                <img src="https://pngimg.com/uploads/cv/cv_PNG38.png" className="page-icons"></img>
                    <h2>
                        CV formunuzu doldurun 
                    </h2>
                    <p>
                        CVdown sitemize hızlı ve kolay bir şekilde üye olarak CV formunuzu doldurun.
                    </p>
                </div>
                <div className="page-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/1939/1939574.png" className="page-icons"></img>
                    <h2>
                        CV şablonunuzu seçin
                    </h2>
                    <p>
                        Kendinizi en iyi bir şekilde anımsatan şablonunuzu seçin.
                    </p>
                </div>
                <div className="page-card">
                    <img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698392-icon-129-cloud-download-512.png" className="page-icons"></img>
                    <h2>
                        CV'nizi indirin
                    </h2>
                    <p>
                        Cv'nizi indirip. İndirme işlemi tamamlandığında CV'nizi görüntüleyebilirsiniz.
                    </p>
                </div>
            </div>
        </section>
    )
}