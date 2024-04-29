import React from 'react'
import styles from "./FirstPage.module.css"
const FirstPage = () => {
    const datas = [{ "id": 1, "name": "Cesar", "image": "Eustace", "date": "11/13/2023", "price": 12 },
    { "id": 2, "name": "Mignonne", "image": "Keenor", "date": "9/28/2023", "price": 40 },
    { "id": 3, "name": "Tedra", "image": "Brearley", "date": "8/13/2023", "price": 67 },
    { "id": 4, "name": "Gerianna", "image": "Gopsill", "date": "4/17/2024", "price": 67 },
    { "id": 5, "name": "Aurora", "image": "Lerer", "date": "3/9/2024", "price": 8 },
    { "id": 6, "name": "Aaron", "image": "Baxendale", "date": "2/29/2024", "price": 99 },
    { "id": 7, "name": "Chelsy", "image": "Drivers", "date": "4/8/2024", "price": 86 },
    { "id": 8, "name": "Odille", "image": "Fateley", "date": "9/17/2023", "price": 98 }]
    return (
        <>
            <div className={styles.layout}>
                <div className={styles.layoutBox}>
                    <div className={styles.heading}>
                        Recent Tranjection
                    </div>
                    {
                        datas.map((data)=>(
                            <div className={styles.rowBox}>
                            <div className={styles.userIcons}><img className={styles.userIcon} src='https://cdn-icons-png.flaticon.com/128/3135/3135715.png' alt='userIcon' /></div>
                            <div className={styles.nameDate}>
                                <div className={styles.name}>{data.name}</div>
                                <div className={styles.date}>{data.date}</div>
                            </div>
                            <div className={styles.totalPrice}>{data.price}</div>
                        </div>
                        ))
                    }
                
                </div>

            </div>
        </>
    )
}

export default FirstPage