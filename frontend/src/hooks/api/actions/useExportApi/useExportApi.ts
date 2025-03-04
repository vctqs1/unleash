import { ExportQuerySchema } from 'openapi';
import useAPI from '../useApi/useApi';

export const useExportApi = () => {
    const { makeRequest, createRequest, errors, loading } = useAPI({
        propagateErrors: true,
    });

    const createExport = async (payload: ExportQuerySchema) => {
        const path = `api/admin/features-batch/export`;
        const req = createRequest(path, {
            method: 'POST',
            body: JSON.stringify(payload),
        });

        try {
            const res = await makeRequest(req.caller, req.id);

            return res;
        } catch (e) {
            throw e;
        }
    };

    return {
        loading,
        errors,
        createExport,
    };
};
