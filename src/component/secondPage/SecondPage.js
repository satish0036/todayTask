import React, { useState } from 'react'
import styles from "./SecondPage.module.css"
const SecondPage = () => {
    const data = {
        "id": 1,
        "name": "Cesar",
        "greet": "Welcome Back",
        "userIcon": "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
        "bellIcon": "https://cdn-icons-png.flaticon.com/128/11026/11026514.png"
    }
    const [active, setActive] = useState(true)
    const handleClick = () => {
        setActive(!active)
    }
    return (
        <>
            <div className={styles.layout}>
                <div className={styles.layoutBox}>

                    <div className={styles.rowBox}>
                        <div className={styles.userIcons}><img className={styles.userIcon} src='https://cdn-icons-png.flaticon.com/128/3135/3135715.png' alt='userIcon' /></div>
                        <div className={styles.nameDate}>
                            <div className={styles.name}>{data.name}</div>
                            <div className={styles.greet}>{data.greet}</div>
                        </div>
                        <div className={styles.bellIconBox}><img className={styles.bellIcon} src={data.bellIcon} /></div>
                    </div>
                    <div className={styles.rowBox2}>
                        <div className={styles.scanIconGroup}>
                            <div className={styles.userIcons}><img className={styles.userIcon} src='https://cdn-icons-png.flaticon.com/128/561/561169.png' alt='plusIcon' /></div>
                            <div className={styles.userIcons}><img className={styles.userIcon} src='https://cdn-icons-png.flaticon.com/128/12140/12140091.png' alt='scanIcon' /></div>

                        </div>
                        <div className={styles.balanceGroup}>

                            <div className={styles.balanceheading}>Total Balance</div>
                            <div className={styles.balancetotal}>$3,12,121</div>
                            <div className={styles.catdButton}>Choose card</div>

                        </div>
                    </div>
                    {
                        active ?
                            <div className={styles.rowBox3}>
                                <div className={styles.row3Icon}><img className={styles.row3Iconsize} src='https://cdn-icons-png.flaticon.com/128/10349/10349139.png' alt='plusIcon' /><div>Send</div></div>
                                <div className={styles.row3Icon}><img className={styles.row3Iconsize} src='https://cdn-icons-png.flaticon.com/128/6489/6489834.png' alt='plusIcon' /><div>Bill</div></div>
                                <div className={styles.row3Icon}><img className={styles.row3Iconsize} src='https://cdn-icons-png.flaticon.com/128/7732/7732118.png' alt='plusIcon' /><div>Recharge</div></div>
                                <div className={styles.row3Icon}><img className={styles.row3Iconsize} src='https://cdn-icons-png.flaticon.com/128/10348/10348994.png' alt='plusIcon' /><div>More</div></div>

                            </div> : ""
                    }

                    <div className={styles.rowBox4}>
                        <div onClick={handleClick} className={styles.hzLine}></div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default SecondPage