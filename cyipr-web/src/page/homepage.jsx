import React from "react";
import './homepage.css';
import Navbar from "../components/Navbar";

function Homepage() {
    return (
        <div class="homepage">
            <Navbar />
            <div class="content">
                <div class="hero">
                    <img src="/image/長盈LOGO.png" alt="Logo" className="logo" />
                    <h1>歡迎來到長盈商標事務所</h1>
                    <p>facebook</p>
                    <p>Line</p>
                    <p>這是首頁的內容。</p>
                    <p>請瀏覽我們的網站以了解更多信息。</p>
                </div>

            </div>

        </div>
    );
}

export default Homepage;