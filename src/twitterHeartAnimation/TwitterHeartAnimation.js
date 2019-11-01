import React, {useState} from 'react';

import './twitterHeartAnimation.scss';

export default function TwitterHeartAnimation() {
  const [isSelected, setIsSelected] = useState(false);
  return <button className={isSelected ? 'heart' : 'heartless'} onClick={() => setIsSelected(!isSelected)} />
}