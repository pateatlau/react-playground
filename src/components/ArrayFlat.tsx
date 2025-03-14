import React, { JSX, useEffect, useState } from 'react';

const ORIGINAL_ARRAY = [1, 2, [3, 4], 5, [6, [7, 8, [10, [11, 12]]]]];
// type NestedArray<T> = Array<T> | Array<NestedArray<T>>

const ArrayFlat: React.FC = (): JSX.Element => {
  const [flattenedArray, setFlattenedArray] = useState<Array<number>>([]);

  function flatArray(items) {
    return items.reduce((arrayData, element) => {
      if (Array.isArray(element)) {
        arrayData = [...arrayData, ...flatArray(element)];
      } else {
        arrayData = [...arrayData, element];
      }
      return arrayData;
    }, []);
  }

  useEffect(() => {
    setFlattenedArray(flatArray(ORIGINAL_ARRAY));
  }, []);

  return (
    <>
      <div>Flattened Array:</div>
      <div>
        [&nbsp;
        {flattenedArray.map((item, index) => (
          <span key={index}>{`${item}, `}</span>
        ))}
        ]
      </div>
    </>
  );
};

export default ArrayFlat;
