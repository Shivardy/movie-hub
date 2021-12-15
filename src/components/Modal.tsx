import { ReactNode, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;

  background: ${(props) => props.theme.getColorWithOpacity("surface4", 0.96)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalDiv = styled.div`
  width: clamp(50%, calc(${(props) => props.theme.size.xxxl} * 10), 90%);
  height: min(50%);
  border-radius: 1ex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type ModalProps = {
  onClose: React.MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
  open: boolean;
};

const Modal = ({ onClose, children, open }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const escFunction = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      ref?.current?.click();
    }
  }, []);
  useEffect(() => {
    document.addEventListener("keydown", escFunction);
    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);
  return open ? (
    <Backdrop onClick={onClose} ref={ref}>
      <ModalDiv onClick={(e) => e.stopPropagation()}>{children}</ModalDiv>
    </Backdrop>
  ) : null;
};

export default Modal;
