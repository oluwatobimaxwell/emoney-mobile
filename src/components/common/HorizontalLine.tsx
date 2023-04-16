import styled from "@emotion/native";

export const HorizontalLine = styled.View<{
  thickness?: number;
  width?: number | string;
  spaceTop?: number;
  spaceBottom?: number;
}>`
  margin-top: ${({ spaceTop }: any) => `${spaceTop || 0}`}px;
  margin-bottom: ${({ spaceBottom }: any) => `${spaceBottom || 0}`}px;
  height: ${({ thickness }: any) => `${thickness || 1}`}px;
  width: ${({ width }: any) => `${width ? width : "100%"}`};
  background-color: ${({ theme }: any) => theme.lightenBlack(0.1)};
`;
