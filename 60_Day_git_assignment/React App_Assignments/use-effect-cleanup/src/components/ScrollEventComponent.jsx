import React, { useState, useEffect } from 'react';

const ScrollEventComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Scroll Position: {scrollPosition}px</h1>
      <p>Scroll the page to see the scroll position change.</p>
      <br />
      <p>This img's only for cheak the scroll position</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuhX8WPHGY8bDj3Kq5E1XMRcHPto6UidC4KbEzIVlesA&s" alt="xyz" />
      <br />
      <img src="https://i0.wp.com/www.baseballamerica.com/wp-content/uploads/bba-media/4354/img_baseball.jpg?fit=640,420&ssl=1" alt="xyz" />
      <br />
      <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt="xyz" />
      <br />
      <img src="https://i.pinimg.com/736x/fb/b7/24/fbb7242470f27c41d3d39d90e641d4dd.jpg" alt="xyz" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVE0FRjzno8z6AcrSrtK7Muu9C8anr3MSG5kPDnLc9wAm9oNzm7ia6XHgVwWjqtJ6FPY&usqp=CAU" alt="xyz" />
      <img src="https://img.freepik.com/premium-photo/tree-field-with-sunset-it_865967-42371.jpg" alt="xyz" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_GeMe79S-VQypCxvdq3OAsT1uTUeCvCx_355p4RgsUx1u8TGHr5ZC3C7GWY-rQFLsKQU&usqp=CAU" alt="xyz" />

    </div>
  );
};

export default ScrollEventComponent;
