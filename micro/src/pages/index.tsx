import { useEffect } from 'react';
import yayJpg from '../assets/yay.jpg';
import { Link, history } from 'umi';

export default function HomePage() {
  useEffect(() => {
    const unblock = history.block(({ location , retry}) => {
      if (!window.confirm("是否离开该页面？")) {
        console.log('no')
      } else {
        unblock();
        retry();
      }
    });
    return () => {
      unblock?.();
    };
  }, []);

  const jump = () => {
    global.history.pushState(null, '', '?section=jump')
  }

  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>

      <Link to='/docs'>docs</Link>
      <br/>
      <Link to='?section=main'>main</Link>
      <br/>
      <Link to='?section=sub'>sub</Link>
      <br/>
      <button onClick={() => jump()}>jump</button>
    </div>
  );
}
