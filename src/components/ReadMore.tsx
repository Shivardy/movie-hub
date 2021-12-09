import React, { useState } from "react";
import styled from "styled-components";

const Span = styled.span`
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;

type ReadMoreProps = {
  text: string;
  maxCharCount?: number;
};
const ReadMore = ({ text = "", maxCharCount = 300 }: ReadMoreProps) => {
  const [isTruncated, setIsTruncated] = useState(text.length > maxCharCount);

  const resultString = isTruncated
    ? text.slice(0, maxCharCount).padEnd(maxCharCount + 3, ".")
    : text;

  const toggleIsTruncated = () => setIsTruncated(!isTruncated);

  return (
    <p>
      {resultString}
      {isTruncated ? <Span onClick={toggleIsTruncated}>Read More</Span> : null}
    </p>
  );
};

export default ReadMore;
