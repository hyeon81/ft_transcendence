import { ApiProperty } from '@nestjs/swagger';
import { User, UserStatus } from '@prisma/client';

class UserModel implements User {
	@ApiProperty({ description: 'User id generated by database' })
	id: string;

	@ApiProperty({ description: 'Intra id', example: 'younhwan' })
	intraId: string;

	@ApiProperty({
		description: 'Nickname',
		example: 'younhwan',
		required: false,
		default: null,
		nullable: true,
	})
	nickname: string;

	@ApiProperty({ description: 'Profile image URI', required: false, default: null, nullable: true })
	profileImageURI: string;

	@ApiProperty({
		description: 'Email used for 2FA',
		example: 'younhwan@student.42seoul.kr',
		required: false,
		default: null,
		nullable: true,
	})
	email2fa: string;

	@ApiProperty({
		description: 'State of using 2FA',
		example: 'false',
		required: false,
		default: false,
	})
	use2fa: boolean;

	@ApiProperty({
		description: 'Status of user',
		example: 'OFFLINE',
		required: false,
		default: UserStatus.OFFLINE,
	})
	status: UserStatus;

	@ApiProperty({ required: false })
	createdAt: Date;

	@ApiProperty({ required: false })
	updatedAt: Date;
}

export default UserModel;
