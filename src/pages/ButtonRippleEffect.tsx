const ButtonRippleEffect = () => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target;

    if (!(target instanceof HTMLElement)) return;

    const nativeEvent = e.nativeEvent;
    const targetWidth = target.offsetWidth;
    const targetHeight = target.offsetHeight;
    const wrapper = document.createElement('div');
    const div = document.createElement('div');
    wrapper.append(div);
    document.body.append(wrapper);
    Object.assign(wrapper.style, {
      position: 'fixed',
      left: nativeEvent.clientX - nativeEvent.offsetX + 'px',
      top: nativeEvent.clientY - nativeEvent.offsetY + 'px',
      width: `${targetWidth}px`,
      height: `${targetHeight}px`,
      overflow: 'hidden',
      pointerEvents: 'none',
    });
    Object.assign(div.style, {
      position: 'absolute',
      left: nativeEvent.offsetX + 'px',
      top: nativeEvent.offsetY + 'px',
      width: '1px',
      height: '1px',
      transition: 'transform .5s ease-in-out',
      backgroundColor: '#fff',
      borderRadius: '50%',
      pointerEvents: 'none',
      opacity: 0.4,
    });
    div.offsetHeight;
    const scale =
      Math.hypot(
        nativeEvent.offsetX > targetWidth / 2 ? nativeEvent.offsetX : targetWidth - nativeEvent.offsetX,
        nativeEvent.offsetY > targetHeight / 2 ? nativeEvent.offsetY : targetHeight - nativeEvent.offsetY,
      ) * 2;
    div.style.transform = `scale(${scale})`;
    div.addEventListener(
      'transitionend',
      function name() {
        wrapper.remove();
      },
      { once: true },
    );
  };

  return (
    <div className='min-h-full flex items-center justify-center bg-black'>
      <div
        onClick={handleClick}
        className='py-5 px-9 bg-[#79067E] text-white cursor-default select-none'
      >
        CLICK ME
      </div>
    </div>
  );
};

export default ButtonRippleEffect;
