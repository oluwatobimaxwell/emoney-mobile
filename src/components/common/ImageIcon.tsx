import styled from "@emotion/native";
import React, { FC, useMemo } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useAppTheme } from "../../contexts/useTheme";

const icons = {
  "golden-win": require("@icons/4939081.png"),
  "arrow-right": require("@icons/Arrow-Right.png"),
  "bookmark-app": require("@icons/Bookmark.png"),
  "close-square": require("@icons/Close-Square.png"),
  person: require("@icons/Group-74.png"),
  lock: require("@icons/Group-75.png"),
  hide: require("@icons/Hide.png"),
  "arrow-left": require("@icons/Iconly-Bold-Arrow-Left.png"),
  camera: require("@icons/Iconly-Bold-Camera.png"),
  image: require("@icons/Iconly-Bold-Image.png"),
  "bookmark-bulk": require("@icons/Iconly-Bulk-Bookmark.png"),
  "home-app": require("@icons/Iconly-Bulk-Home.png"),
  show: require("@icons/Iconly-Bulk-Show.png"),
  "Path-1": require("@icons/Path-1.png"),
  "arrow-up": require("@icons/Polygon-1.png"),
  "search-app": require("@icons/Search.png"),
  "stroke-right": require("@icons/Stroke-1.png"),
  "stroke-left": require("@icons/Stroke-2.png"),
  time: require("@icons/Time-Circle.png"),
  briefcase: require("@icons/briefcase.png"),
  brightness: require("@icons/brightness.png"),
  cars: require("@icons/cars.png"),
  glasses: require("@icons/glasses.png"),
  "laptop-mobile": require("@icons/laptop-mobile.png"),
  tiktok: require("@icons/tiktok.png"),
  "bookmark-bold": require("@icons/Bookmark-Bold.png"),
  "home-bold": require("@icons/Home-Bold.png"),
  bookmark: require("@icons/Iconly-Bookmark.png"),
  home: require("@icons/Iconly-Home.png"),
  plus: require("@icons/Iconly-Plus.png"),
  search: require("@icons/Iconly-Search.png"),
  "plus-bold": require("@icons/Plus-Bold.png"),
  "search-bold": require("@icons/Search-Bold.png"),
  category: require("@icons/Category.png"),
  wallet: require("@icons/Wallet.png"),
  walletBold: require("@icons/Wallet-1.png"),
  workBold: require("@icons/Work.png"),
  work: require("@icons/Work-1.png"),
};

type ImageIconType = keyof typeof icons;

export type IconName = ImageIconType | string;

interface Props {
  name: IconName;
  size?: number;
  color?: string;
  tint?: "white" | "black" | undefined;
  style?: object;
}

const ImageIcon: FC<Props> = ({
  name,
  size = 20,
  color = "#000",
  tint,
  style = {},
}) => {
  const theme = useAppTheme();

  const iconImage = icons?.[name as ImageIconType];
  if (!iconImage)
    return <Icon name={name} size={size} color={color} style={style} />;
  return (
    <Root size={size}>
      <Image
        source={iconImage}
        style={{
          ...style,
          ...(tint
            ? { tintColor: tint }
            : { tintColor: theme.scheme === "dark" ? "white" : "black" }),
        }}
      />
    </Root>
  );
};

export default ImageIcon;

const Image = styled.Image`
  flex: 1;
  width: auto;
  height: 100%;
  resize-mode: contain;
`;

const Root = styled.View<{
  size: number;
}>`
  width: ${({ size }) => `${size}`}px;
  height: ${({ size }) => `${size}`}px;
`;
