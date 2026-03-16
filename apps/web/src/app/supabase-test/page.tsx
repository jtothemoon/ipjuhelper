import { supabase } from '@workspace/supabase/client';

export default async function SupabaseTestPage() {
  const { data, error } = await supabase.from('_test_connection').select('*').limit(1);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Supabase 연결 테스트</h1>
      {error ? (
        <p className="mt-4 text-green-600">
          연결 성공! (테이블이 없어서 에러지만 연결은 됨: {error.message})
        </p>
      ) : (
        <p className="mt-4">데이터: {JSON.stringify(data)}</p>
      )}
    </main>
  );
}
