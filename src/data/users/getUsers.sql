SELECT [Id],
        [UserId],
        [Email],
        [Name],
        [Department],
        [EnteredOn],
        [LastUpdate],
        [SecurityLevel]
FROM    [dbo].[users]
ORDER BY
        [EnteredOn]