import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import ProgressBar from './ProgressBar';

interface HeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  progress: number;
}

const Header: FC<HeaderProps> = ({
  currentQuestion,
  totalQuestions,
  progress,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.questionStatus}>
        <Text style={styles.questionStatusText}>
          {currentQuestion}/{totalQuestions}
        </Text>
      </View>

      <View style={{flex: 1}}>
        <ProgressBar progress={progress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionStatus: {
    width: 40,
    marginRight: 10,
  },
  questionStatusText: {
    color: '#ffffff',
  },
});

export default Header;
