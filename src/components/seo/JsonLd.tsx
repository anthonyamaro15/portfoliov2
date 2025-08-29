import React from 'react';

type Props = { data: Record<string, any>; id?: string };

const JsonLd: React.FC<Props> = ({ data, id }) => (
  <script
    id={id}
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JsonLd;

