import React ,{ useState }from 'react';
import Switch from "react-switch";
function SwitchIcon() {

    const [checked, setChecked] = useState(false);

    const handleSwitch = () => {
        setChecked(!checked);
        if(checked == false){
            document.body.classList.add('light-mode');
        }else{
            document.body.classList.remove('light-mode');
        }
    }

    return (
          <div className="s-mode">
            <Switch 
                onChange={handleSwitch}
                checked={checked}
                onColor='#333'
                offColor='#333'
                checkedIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 16,
                            color: "orange",
                            paddingRight: 2
                        }}
                    >
                    <i className="fas fa-moon"></i>
                    </div>
                }
                uncheckedIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 17,
                            color: "orange",
                            paddingRight: 2
                        }}
                    >
                     <i className="fa fa-sun"></i>
                    </div>
                }
                checkedHandleIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                    </div>
                }
            />
          </div>
    )
}

export default SwitchIcon
