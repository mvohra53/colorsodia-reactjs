import {useState,useEffect} from 'react';

const Social = () => {
    const [socialList, setSocialList] = useState([]);
    useEffect(()=>{
        async function loadsocialist() {
            const socialist = [
                
            ];
            setSocialList(socialist);
            console.log();
        }
    
        loadsocialist();
    },[]);
    return (
        <div className="common-h social-h">
            <div className="header-social-share">
                <ul>
                    {socialList.length > 0 && socialList.map(function (i, v) {
                        return <li key={"social_h_" + v}>
                            <a href={i.link} rel="noreferrer" target="_blank">
                                <img src={i.icon} alt={i.name} />
                            </a>
                        </li>;
                    })}
                </ul>
            </div>
        </div>
    );
};
export default Social;