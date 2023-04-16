import React, { useState } from "react";
import styled from "@emotion/native";
import pluralize from "pluralize";
import Button from "./Button";
import Text from "./Text";

export type WizardStep = {
  label?: string;
  component: React.FC;
};

type WizardProps = {
  steps: WizardStep[];
  handleComplete?: () => void;
  onCompleteButtton?: React.ReactNode;
};

type WizardContextType = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export const WizardContext = React.createContext<WizardContextType>({
  currentStep: 0,
  setCurrentStep: () => {},
});

const Wizard: React.FC<WizardProps> = ({
  steps = [],
  handleComplete,
  onCompleteButtton,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const StepComponent = steps[currentStep].component;

  const contextValue: WizardContextType = {
    currentStep,
    setCurrentStep,
  };

  const handlePrevStep = () => {
    if (currentStep === 0) return;
    setCurrentStep(currentStep - 1);
  };

  const handleNextStep = () => {
    if (currentStep === steps.length - 1) return;
    setCurrentStep(currentStep + 1);
  };

  return (
    <WizardContext.Provider value={contextValue}>
      <Root>
        <Container>
          <StepIndicator>
            <Text
              text={`${currentStep + 1}/${steps.length} ${pluralize(
                "Page",
                steps.length
              )}`}
              variant="body1Bold"
              align="right"
            />
          </StepIndicator>
          <StepComponent />
        </Container>
        <FooterWrap>
          {currentStep > 0 && (
            <BackButton onPress={handlePrevStep}>
              <Text variant="body1Bold" text="Back" underlined />
            </BackButton>
          )}
          <FooterSeparator />
          {currentStep < steps.length - 1 && (
            <Button
              text="Next"
              iconRight="stroke-right"
              squaredIcon
              onPress={handleNextStep}
            />
          )}
          {currentStep === steps.length - 1 &&
            (onCompleteButtton ? (
              onCompleteButtton
            ) : (
              <Button
                text="Complete"
                iconRight="stroke-right"
                squaredIcon
                onPress={() => handleComplete?.()}
              />
            ))}
        </FooterWrap>
      </Root>
    </WizardContext.Provider>
  );
};

const Root = styled.View``;

const FooterWrap = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

const FooterSeparator = styled.View`
  flex: 1;
`;

const Container = styled.View`
  width: 100%;
`;

const StepIndicator = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 30px;
  margin-bottom: 16px;
`;

const BackButton = styled.TouchableOpacity``;

export default Wizard;
