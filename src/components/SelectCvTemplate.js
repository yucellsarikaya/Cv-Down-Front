import React, { useState } from 'react'

export default function SelectCvTemplate() {
    return (
        <div>
            <div class="container-bar">
                <ul class="progressbar">
                    <li class="active">Kişisel</li>
                    <li class="active">Deneyimler</li>
                    <li class="active">Şablon</li>
                </ul>
            </div>
            <div className="site-card">
                <h1>
                    CV şablonunuzu seçiniz
                </h1>
                <p>Şablonunuzu seçtikten sonra CV'nizin son halini görüntüleyebilirsiniz.</p>
                <hr />
                <div className="select-cv-templates">

                </div>
            </div>
        </div>
    )
}
