'use client';
import {useRouter} from 'next/navigation';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { AuthorizationPageLayout } from '@/components';


export default function Authorization(): JSX.Element {
  const router: AppRouterInstance = useRouter();
  setTimeout(() => router.push('/'), 2000);
  return (
    <AuthorizationPageLayout />
  );
}
