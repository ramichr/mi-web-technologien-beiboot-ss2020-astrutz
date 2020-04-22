window.onload = () =>{
    const MDCRipple = mdc.ripple.MDCRipple;
    const buttons = [].map.call(document.querySelectorAll('.mdc-button'), function(el) {
        return new MDCRipple(el);
    });
};

