import { Card, BRFLibraryText, baseColor, BaseIcon } from '@/brfLibrary_ui';
import React from 'react';
import { ImageSourcePropType, View } from 'react-native';

interface IProps {
  title: string;
  subTitle: string;
  icon: ImageSourcePropType;
}

const WrapperCard: React.FC<IProps> = ({ title, subTitle, icon }) => {
  return (
    <Card>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <BRFLibraryText
            variant="@body1"
            color={baseColor.lightBlue500}
            value={title}
          />
          <BRFLibraryText
            variant="@subtitle2"
            color={baseColor.gray700}
            value={subTitle}
            style={{ marginTop: 10 }}
          />
        </View>

        <BaseIcon source={icon} size={16} />
      </View>
    </Card>
  );
};

export default WrapperCard;
