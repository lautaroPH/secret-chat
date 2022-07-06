import useUser from 'hooks/useUser';
import Image from 'next/image';

const UserInfo = () => {
  const user = useUser();

  return (
    <div className="flex items-center justify-center mr-7">
      {user?.user_metadata?.avatar_url && (
        <picture className="overflow-hidden rounded-full w-9 h-9">
          <Image
            src={user?.user_metadata?.avatar_url}
            alt={user?.user_metadata?.user_name}
            width={36}
            height={36}
            className="rounded-full"
            priority={true}
          />
        </picture>
      )}
      <h1 className="ml-2 text-lg font-semibold">
        {user?.user_metadata?.user_name}
      </h1>
    </div>
  );
};

export default UserInfo;
