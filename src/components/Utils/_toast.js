import "../../../node_modules/izitoast/dist/css/iziToast.css";
import iziToast from "izitoast";

export const ToastSuccess = message => 
{
    console.log(message);
	iziToast.show({
        title: "Success",
        icon: "ico-success",
        message: message,
        iconColor: "rgb(0, 255, 184)",
        theme: "dark",
        progressBarColor: "rgb(0, 255, 184)",
        position: "topRight",
        transitionIn: "bounceInLeft",
        transitionOut: "fadeOut",
        timeout: 4000
    });
}

export const ToastDanger = message => 
{
    if(Array.isArray(message))
    {
        for(let i = 0; i < message.length; i++)
        {
            iziToast.error({
                title: "Error",
                icon: "ico-error",
                message: message[i],
                position: "topRight",
                transitionIn: "bounceInLeft",
                transitionOut: "fadeOut",
            });
        }
    }
    else
    {
        iziToast.error({
            title: "Error",
            icon: "ico-error",
            message: message,
            position: "topRight",
            transitionIn: "bounceInLeft",
            transitionOut: "fadeOut",
        });
    }

}