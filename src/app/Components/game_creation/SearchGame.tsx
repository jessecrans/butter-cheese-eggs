import React, { useEffect, useState } from 'react';
import { auth, db } from '@/app/firebase';
import { getDatabase, ref, set, push, ThenableReference, remove } from 'firebase/database';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useList, useObject } from 'react-firebase-hooks/database';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const SearchGame = () => {
  const [user, userLoading, userError] = useAuthState(auth);
  const [queue, queueLoading, queueError] = useList(ref(db, 'queue'));
  const [inQueue, setInQueue] = useState(false);
  const [userQueueRef, setUserQueueRef] = useState<any>(null);

  const loading = queueLoading || userLoading;
  const error = queueError || userError;

  useEffect(() => {
    console.log('user changed');
  }, [user])

  useEffect(() => {
    console.log('queue changed');
  }, [queue])

  const handleEnterQueue = async () => {
    const queueRef = ref(db, 'queue');
    const newUserQueueRef = await push(queueRef, {
      uid: user?.uid,
      displayName: user?.displayName,
    });
    setInQueue(true);
    setUserQueueRef(newUserQueueRef);
  }

  const handleLeaveQueue = async () => {
    await remove(userQueueRef);
    setInQueue(false);
  }

  return (
    <div
      className='text-center'
    >
      {
        loading ? (
          <FontAwesomeIcon
            icon={faSpinner}
            spin
          />
        ) : (
          <>
            {
              inQueue ? (
                <button
                  className='p-2 rounded bg-red-500 hover:bg-red-600 text-white'
                  onClick={handleLeaveQueue}
                >
                  In Queue
                  <FontAwesomeIcon
                    className='ml-2'
                    icon={faSpinner}
                    spin
                  />
                </button>
              ) : (
                <button
                  className='p-2 rounded bg-blue-500 hover:bg-blue-600 text-white'
                  onClick={handleEnterQueue}
                >
                  Search Game
                </button>
              )
            }
            <p>{queue?.length} players queued.</p>
          </>
        )
      }
    </div>
  );
}

export default SearchGame
