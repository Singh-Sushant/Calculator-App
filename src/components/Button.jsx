export const Button = ({val,input ,fn}) =>{

    const show=()=>{
        fn(val);
    }
    let button_style = "btn btn-light m-3 btn-lg shadow border-black btn1";
    if(val == '='){
        button_style = "btn btn-primary m-3 btn-lg shadow border-black text-light eq_btn ";
    }
    if(val=='AC'){
        button_style = " btn btn-danger m-3 btn-lg shadow border-black text-light ac_btn";
    }
    if(val == 'Back'){
        button_style = "btn btn-light m-3 btn-lg shadow border-black back_btn";
    }
   
    return(
        <>
            <button onClick={show} className={button_style}>{val}</button>
        </>
    )
}