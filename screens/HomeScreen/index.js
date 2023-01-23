import React from "react";
import BaseButton from "../../components/BaseButton";
import BaseText from "../../components/BaseText";
import Layout from "../../components/Layout";

const HomeScreen = (props) => {
  const { navigation } = props;

  return (
    <Layout>
      <BaseText>HOME SCREEN</BaseText>
      <BaseButton onPress={() => navigation.navigate("Contact")}>
        Click
      </BaseButton>
    </Layout>
  );
};

export default HomeScreen;
