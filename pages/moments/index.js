import styles from './Moments.module.css'
import {useEffect} from "react";

const MomentsItem = ({}) => {
    return <div className={styles['moments-item']}>
        <div className={styles['moments-avatar']}>
            <img src="./avatar.jpg" alt=""/>
        </div>
        <div className={styles['moments-main']}>
            <div className={styles['moments-detail']}>
                <div className={styles['moments-nickname'] }>大王</div>
                <div className={styles['moments-text-content']}>今天是个好日子，明天放假</div>
            </div>
            <div className={styles['moments-tips']}>
                <span>15分钟前</span>
                <span className={styles.more}>...</span>
            </div>
            <div className={styles['moments-reply-list']}>
                <div className={styles['moments-reply']}>
                    <span className={styles['moments-nickname']}>AaronW: </span>
                    <span>一派胡言，老板听了很生气！</span>
                </div>
            </div>
        </div>
    </div>
}

export default function Moments() {
    let startTouchY;

    useEffect(() => {
        document.addEventListener('touchstart', function (e) {
            // e.preventDefault();
            const {touches} = e;
            if (touches.length) {
                let touch = touches[0];
                const {clientX, clientY} = touch;
                startTouchY = clientY;
            }
        })

        document.addEventListener('touchmove', function (e) {
            // e.preventDefault();
        }, {passive: false})
        document.addEventListener('touchend', function (e) {
            const {changedTouches} = e;
            if (changedTouches.length) {
                let touch = changedTouches[0];
                const {clientX, clientY} = touch;
                if (clientY > startTouchY) {
                    console.log('下拉');
                }
            }
        })
    }, [])
    return (
        <>
            <div className={styles.head}>
                <img src='./moments.jpg' alt=""/>
                <div className={styles.owner}>
                    <div className={styles.info}>
                        <div>AaronW</div>
                        <div>AaronW's moments</div>
                    </div>
                    <div className={styles.avatar} />
                </div>
            </div>
            <div className={styles['moments-list']}>
                <MomentsItem />
                <MomentsItem />
                <MomentsItem />
                <MomentsItem />
                <MomentsItem />
            </div>
        </>
    )
};
