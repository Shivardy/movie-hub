import styled from "styled-components";
import Close from "../icons/Close";

const Iframe = styled.iframe`
  min-width: 90vw;
  min-height: calc(90vw * (9 / 16));
`;

const IframeHeader = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: black;
  padding: ${(props) => props.theme.size.sm};
  color: white;

  & > span {
    cursor: pointer;
  }

  & > span > svg {
    width: 3ch;
  }
  & > p {
    font-weight: 600;
  }
`;

type YoutubeTrailerProps = {
  name: string;
  youtubeKey: string;
  onClose: React.MouseEventHandler<HTMLSpanElement>;
};

const YoutubeTrailer = ({ name, youtubeKey, onClose }: YoutubeTrailerProps) => (
  <>
    <IframeHeader>
      <p>{name}</p>
      <span onClick={onClose}>
        <Close />
      </span>
    </IframeHeader>
    <Iframe
      title={name}
      id="ytplayer"
      src={`https://www.youtube.com/embed/${youtubeKey}?autoplay=1`}
      frameBorder="0"
      allowFullScreen
    />
  </>
);

export default YoutubeTrailer;
