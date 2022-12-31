import { PropsWithChildren, HTMLAttributes, useEffect, useRef, CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';
import { KEY_CODE } from 'shared/constants';
import { useBoolean } from 'shared/hooks';
import { fixedFullCss } from 'shared/styles/css';
import styled, { css } from 'styled-components';
import { Backdrop } from '../Backdrop';

export type ModalProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    /**
     * `true` - открыть модалку. <br />
     * `false` - закрыть модалку.
     */
    open?: boolean;
    /**
     * Внутрь какого элемента в DOM узле вставить модалку
     */
    container?: HTMLElement;
    BackdropComponent?: React.ElementType<HTMLAttributes<HTMLElement>>;
    onClose?: () => void;
    /**
     * Скрыть Backdrop
     */
    hideBackdrop?: boolean;
  }
>;

const StyledModal = styled.div`
  ${fixedFullCss}
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
} as Record<string, CSSProperties>;

const DURATION = 300;

export const Modal = ({
  open = false,
  container = document.body,
  BackdropComponent = Backdrop,
  children,
  onClose,
  hideBackdrop,
  ...props
}: ModalProps) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const inProp = useBoolean();

  useEffect(() => {
    if (open) {
      inProp.setState(open);
    }
  }, [inProp.setState, open]);

  useEffect(() => {
    if (open) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.code === KEY_CODE.Escape) {
          inProp.setFalse();
        }
      };
      container.addEventListener('keydown', handleKeyDown);
      return () => {
        container.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [container, open]);

  return open
    ? createPortal(
        <Transition nodeRef={nodeRef} in={inProp.state} onExited={onClose} timeout={DURATION}>
          {(state) => (
            <StyledModal
              ref={nodeRef}
              role='presentation'
              css={css`
                transition: all 300ms ease-in-out;
                opacity: 0;
              `}
              style={transitionStyles[state]}
              {...props}
            >
              {!hideBackdrop && <BackdropComponent onClick={inProp.setFalse} />}
              {children}
            </StyledModal>
          )}
        </Transition>,
        container,
      )
    : null;
};
