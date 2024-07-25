import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MasonryFlashList } from "@shopify/flash-list";

const ImageGrid = ({images}) => {
  return (
    <View>
      <MasonryFlashList
        data={images}
        numColumns={2}
        //renderItem={({ item }) => <ImageCard/>}
        estimatedItemSize={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageGrid;
