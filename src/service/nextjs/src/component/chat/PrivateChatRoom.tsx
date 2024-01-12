import { useParams } from 'next/navigation';
import useFetchData from '@/hook/useFetchData';
import Chatroom from '@/type/chatroom.type';
import ChatRoomLayout from '@/component/chat/ChatRoomLayout';
import { MenuHeader } from '@/component/common/Header';
import { PrivateParticipantList } from '@/component/chat/ParticipantList';

const PrivateChatRoom = () => {
	const params = useParams<{ id: string }>();
	const { data, isLoading } = useFetchData<Chatroom[]>(`/chatroom/${params?.id}`);
	const { data: chatData } = useFetchData<any[]>(`/chatroom/chat?destId=${params?.id}`);

	return (
		<ChatRoomLayout type={'dm'} chatRoomData={chatData}>
			<MenuHeader title={'채팅'} type={'chat'}>
				<PrivateParticipantList data={data} isLoading={isLoading} />
			</MenuHeader>
		</ChatRoomLayout>
	);
};

export default PrivateChatRoom;
