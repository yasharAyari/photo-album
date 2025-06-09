'use client'; // REQUIRED in Next.js App Router if using useEffect or state
import { useData } from '@libs/hooks/useData';
import type { Picture } from '@libs/interfaces/picture';
import Image from 'next/image';
import { getImageUrl } from '@libs/utils/apiUtils';
import styles from './page.module.css';

export default function Index() {
  const { data, loading, error } = useData();

  if (error) {
    return (
      <div className={styles.page}>
        <section className="wrapper">
          <p>some thing went wrong please refresh the page</p>
        </section>
      </div>
    );
  }
  return (
    <div className={styles.page}>
      <section className="wrapper">
        <div className={styles.container}>
          {loading ? 'loading...' : data.map((pic: Picture) => (
            (<div className={styles.imageWrapper} key={pic.id}>
              <Image width={pic.width} height={pic.height} src={getImageUrl(pic.url_token)} alt={pic.url_token} />
            </div>)
          ))
          }
        </div>
      </section>
    </div>
  );
}

