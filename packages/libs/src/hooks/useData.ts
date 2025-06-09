import { useEffect, useState } from 'react';
import { ProfileData } from '../interfaces/profileData';
import { Picture } from '../interfaces/picture';
import { PROFILE_URL } from '../constants';
import { fetchData } from '../utils/apiUtils';

export function useData() {
  const [data, setData] = useState<Picture[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData<ProfileData>(PROFILE_URL)
      .then((data) => setData(data.pictures))
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
}
