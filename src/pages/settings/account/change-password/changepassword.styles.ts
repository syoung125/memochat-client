import styled from '@emotion/styled';

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 36px 18px calc(36px + env(safe-area-inset-bottom, 0));
`;
export const Title = styled.h1`
  margin-bottom: 16px;
  ${({ theme }) => theme.typography.h1};
  color: ${({ theme }) => theme.color.black1};
`;
export const Content = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
