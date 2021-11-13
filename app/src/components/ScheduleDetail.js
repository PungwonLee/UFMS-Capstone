import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { ScheduleContext } from '../context/schedule';
import ScheduleItem from './ScheduleItem';

const Container = styled.View`
  background-color: white;
  padding: 10px 30px;
  margin-bottom: 15px;
`;

const CustomButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 50px;
  height: 33px;
`;

const UpdateButton = styled(CustomButton)`
  background-color: #007aff;
  margin-end: 10px;
`;

const DeleteButton = styled(CustomButton)`
  background-color: red;
`;

const ScheduleDetail = function ({ schedule }) {
  const { dispatch } = useContext(ScheduleContext);

  const onPressUpdate = function () {
    dispatch({ type: 'SELECT_SCHEDULE', schedule });
    dispatch({ type: 'UPDATE_MODAL_VISIBLE' });
  };

  const onPressDelete = function () {
    dispatch({ type: 'SELECT_SCHEDULE', schedule });
    dispatch({ type: 'DELETE_MODAL_VISIBLE' });
  };

  return (
    <Container key={schedule.id}>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}>
        <ScheduleItem
          title="시간"
          body={`${schedule.startTime}~${schedule.endTime}`}
          row={true}
        />
        <ScheduleItem title="상태" body={schedule.status} row={true} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <ScheduleItem title="이름" body={schedule.name} row={true} />
        <ScheduleItem title="위치" body={schedule.location} row={true} />
      </View>
      <ScheduleItem title="공지사항" body={schedule.notice !== undefined ? schedule.notice : '없음'} />
      <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
        <UpdateButton onPress={onPressUpdate}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>변경</Text>
        </UpdateButton>
        <DeleteButton onPress={onPressDelete}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>삭제</Text>
        </DeleteButton>
      </View>
    </Container>
  );
};

export default ScheduleDetail;