import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Dimensions,
} from "react-native";

const screenHeight = Dimensions.get("screen").height;

interface Props {
  onEndReach?: (page: number) => void;
  scrollViewRef: React.RefObject<any>;
}

export const useScrollEndCallback = ({ onEndReach, scrollViewRef }: Props) => {
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const offsetY = contentOffset.y;
    const contentHeight = contentSize.height;
    const scrollViewHeight = layoutMeasurement.height;

    if (offsetY + scrollViewHeight >= contentHeight) {
      const page = Math.ceil((offsetY + scrollViewHeight) / screenHeight) - 1;
      onEndReach?.(page === 0 ? 1 : page);
    }
  };

  const handleContentSizeChange = (
    contentWidth: number,
    contentHeight: number
  ) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd();
    }
  };

  return { handleScroll, handleContentSizeChange };
};
