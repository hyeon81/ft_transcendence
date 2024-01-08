import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';

export class Participant {
	@ApiProperty({ description: 'Participant id generated by database' })
	id: string;

	@ApiProperty({ description: 'Participant role' })
	role: $Enums.ParticipantRole;

	@ApiProperty({ description: 'User uuid' })
	userId: string;

	@ApiProperty({ description: 'User nickname' })
	userNickname?: string | null;

	@ApiProperty({ description: 'User profile image uri' })
	userProfileImageURI?: string | null;
}
